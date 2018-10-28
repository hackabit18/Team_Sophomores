clc;
clear;
imageA = imread('C:\Users\nisha\Desktop\matlab_scripts\Green.jpg');
red=imread('C:\Users\nisha\Desktop\matlab_scripts\Red.jpg');
nir=imread('C:\Users\nisha\Desktop\matlab_scripts\NIR.jpg');
sp=imread('C:\Users\nisha\Desktop\matlab_scripts\Multispectral.jpg');

%figure,
%subplot(3,2,1);
%imshow(sp);
%title('Spectral strength');
%subplot(2,2,2);
%imshow(imageA );
%title('Green spectral');
%subplot(2,2,3);
%imshow(red );
%title('Red spectral');
%subplot(2,2,4);
%imshow(nir);
%title('Nir spectral');

fftAg = fft2(im2double(imageA));
fftAr = fft2(im2double(red));
fftAn = fft2(im2double(nir));
  
% Fourier transform magnitude of the image  
%figure,
%imshow(abs(fftshift(fftAg)),[0,255]),colormap gray
%subplot(2,2,1);
%imshow(abs(fftshift(fftAg)),[0,255]),colormap gray
%title('Image Green FFT2 Magnitude');
%subplot(2,2,2);
%imshow(abs(fftshift(fftAr)),[0 255]), colormap gray
%title('Image Red FFT2 Magnitude');
%subplot(2,2,3);
%imshow(abs(fftshift(fftAn)),[0 255]), colormap gray
%title('Image Nir FFT2 Magnitude');
 
%calculation of the radiance and reflectance
%GREEN
lg=((14.45-1.76)/255)*imageA+1.76;
%RED
lr=((17.03-1.54)/255)*red+1.54;
%NIR
lni=((17.19-1.09)/255)*nir+1.09;

%figure,
%subplot(2,2,1);
rg=0.0207*im2double(lg);
%imshow(rg);
%impixelinfo();
%title('Actual Reflectance ');
%GREEN REFLECTANCE
%subplot(2,2,2);
%imshow(rg,[0.0001 0.00189]), colormap gray
%impixelinfo();
%title('Image Green Reflectance [0.0001 0.00189] ');
%RED  REFLECTANCE
%subplot(2,2,3);
rr= 0.0240*im2double(lr);
%imshow(rr,[0.0001 0.00189]),colormap gray
%title('Image Red Reflectance [0.0001 0.00189] ');
%NIR REFLECTANCE
%subplot(2,2,4);
rni= 0.0338*im2double(lni);
%imshow(rni,[0.0001 0.00189]), colormap gray
%title('Image Nir Reflectance [0.0001 0.00189]');

 
% calculation of jupp start
sma =40 %input('Enter the maximum depth Dn value : ');
smin =0 %input('Enter the minimum depth Dn value : ');
smen =25 %input('Enter the mean depth Dn value :');
temp=(smin -smen)/(sma-smen)
k2=log(temp)
k2=k2/(2*(18-5))
k2=abs(k2)
temp2=(sma-smen)
a2=log(temp2)+2*(k2)*18
a2=abs(a2)
ui= im2double(rg);
 for i = 1:576
    for j = 1:700
     z(i,j)=(-a2-log(ui(i,j)-0.133))/(2*k2);
    end
 end
 %figure,imshow(abs(z),[13.2645 13.2730]),colormap jet(256);
 %title('Jupp Method colormap scale');
  %jupp end

  %philpot start 
  temp3=(smin-sma)
    g=-0.3356;
  for i = 1:576
    for j = 1:700
      p(i,j)=((log(ui(i,j)-0.118)-log(temp3))/g);
    end
  end
  abs(z)
  %figure,imshow((abs(z)),[10.6688 10.6773]),colormap jet(256);
  %title('Philpot Method colormap scale');
 %philpot end