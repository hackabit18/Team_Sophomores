clc;
clear;
close();

 B=imread('C:\Users\nisha\Desktop\matlab_scripts\satellite-images\B-SENTINEL (6).tif');    %Base image
     p=rgb2gray(B);
    
    y1=im2double(p);
    a=y1;b=y1;
    f=1;
    [r,c]=size(y1);

    for i=1:r
      for j=1:c
        b(i,j)=f*log(1+y1(i,j));  
      end
    end
    
    bi2=b>0.2;
    
    
folder = 'C:\Users\nisha\Desktop\matlab_scripts\satellite-images'
filePattern = fullfile(folder,'*.tif');
f=dir(filePattern)
files={f.name}
for k=1:numel(files)
	fullFileName = fullfile(folder, files{k})
	cellArrayOfImages{k}=imread(fullFileName)
end


for k=1:numel(files)
    I=cellArrayOfImages{k};

    p=rgb2gray(I);
    
    y1=im2double(p);
    a=y1;b=y1;
    f=1;
    [r,c]=size(y1);

    for i=1:r
      for j=1:c
        b(i,j)=f*log(1+y1(i,j));  
      end
    end
    
    bi=b>0.2;
    
    I=imfuse(bi,bi2);
    p=rgb2gray(I);
    
    y1=im2double(p);
    a=y1;b=y1;
    f=1;
    [r,c]=size(y1);

    for i=1:r
      for j=1:c
        b(i,j)=f*log(1+y1(i,j));  
      end
    end
    
    bi1=b>0.50;
    
    W(k)=(1-nnz(bi1)/numel(bi1))*100;  %water level
    
    if W(k)>47.597811553379050
           res1='C:\Users\nisha\Desktop\matlab_scripts\Flood Images'
           baseFileName1 = sprintf('%d.png',k);  
           fullFileName1 = fullfile(res1, baseFileName1);  
           imwrite(bi1, fullFileName1);
    end   

end

 


   

 