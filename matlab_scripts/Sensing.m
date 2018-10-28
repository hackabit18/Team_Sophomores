clc; clear; close;
%Threshold values taken by precise calibration (Note : These are not magic
%values or hardcoded numbers. They correspond to the color of the land
%region of the image taken by precise calibration).
RedThU = 157;
RedThL = 88;
GreenThU = 183;
GreenThL = 121;
BlueThU = 120;
BlueThL = 50;
%Vth = (k * 1/Resolution) + TidalCorrection
Vth = 0.15;

%load base image for comparison
BI = imread('baseimage.tif');

%seperate water from picture
red = BI(:,:,1);
green = BI(:,:,2);
blue = BI(:,:,3);       
%d = impixel(BI);
bi_thresh = red < RedThU & red > RedThL & green < GreenThU & green > GreenThL & blue < BlueThU & blue > BlueThL;
bi_thresh = bwmorph(bi_thresh, 'dilate');
bi_thresh = imfill(bi_thresh, 'holes');
bi_thresh = imcomplement(bi_thresh);
%subplot(2,2,1),imshow(bi_thresh);
%subplot(1,2,1),imshow(bi_thresh);

%calculate area of water
stats = regionprops(bi_thresh);
granuals_correction = 5;
area = 0;
for i = 1: length(stats)
   if(stats(i).Area > granuals_correction)
        area = area + stats(i).Area;  
   end   
end

%get the latest image for test

%read the latest image
%I = imread('floodimage.tif');
I = imread('floodimage.tif');
%seperate water from picture
red = I(:,:,1);
green = I(:,:,2);
blue = I(:,:,3);   
%d = impixel(I);
I = red < RedThU & red > RedThL & green < GreenThU & green > GreenThL & blue < BlueThU & blue > BlueThL;
I = bwmorph(I, 'dilate');
I = imfill(I, 'holes');
I = imcomplement(I);
%subplot(1,2,2),imshow(I);

%calculate area of water
areaL = 0;
stats = regionprops(I);
for i = 1: length(stats)
   if(stats(i).Area > granuals_correction)
        areaL = areaL + stats(i).Area;  
   end   
end
%subplot(1,2,2),imshow(I);

%Taking change in water area

perc = (areaL - area) / area;
perc = perc * 100;
alert = 0;
%check for flood 
if(perc > Vth)
    alert = 1;
end