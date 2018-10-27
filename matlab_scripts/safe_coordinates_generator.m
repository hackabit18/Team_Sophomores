clc; clear; close;
data = xlsread('kerala-coordinates.xlsx');
[~,txtData] = xlsread('kerala-coordinates.xlsx');
lat = data(:,1);
lng = data(:,2);
res = data(:,3);

arr_lat = zeros(length(lat));
arr_lng = zeros(length(lng));

srcFiles = dir('c:\Users\nisha\Desktop\matlab_scripts\elevation-maps\*.png');  % the folder in which ur images exists
for j = 1 : length(srcFiles)
    filename = fullfile('c:\Users\nisha\Desktop\matlab_scripts\elevation-maps\', srcFiles(j).name);
    I = imread(filename);
    red = I(:,:,1);
    green = I(:,:,2);
    blue = I(:,:,3);
    %Convert image to grayscale
    I = red < 120 & green > 120 & blue < 180;
    I = imfill(I, 'holes');
    I = bwmorph(I, 'dilate');
    stats = regionprops(I);
    max = 0;
    for i=1 : length(stats)
        obj = stats(i);
        area = obj.Area;
        if(max < area)
            max = area;
            centeroid = obj.Centroid;
        end
    end
    latc = centeroid(1);
    lngc = centeroid(2);
    
    [heigth, width] = size(I);
    
    %Calculations
    imgh = heigth;
    imgw = width;
    
    platdiff = latc - (imgh / 2);
    plngdiff = lngc - (imgw / 2);
    
    rplatdiff = platdiff * res(j);
    rplngdiff = plngdiff * res(j);
    
    deglat = rplatdiff / 111045;
    deglng = rplngdiff / 111045;
    
    newlatpoint = lat(j) + deglat;
    newlngpoint = lng(j) + deglng;
    
    arr_lat(j) = newlatpoint;
    arr_lng(j) = newlngpoint;
end

xlswrite('kerala-coordinates.xlsx', txtData, 'Coordinates', 'A'); 
xlswrite('kerala-coordinates.xlsx', lat, 'Coordinates', 'B'); 
xlswrite('kerala-coordinates.xlsx', lng, 'Coordinates', 'C'); 
xlswrite('kerala-coordinates.xlsx', res, 'Coordinates', 'D'); 
xlswrite('kerala-coordinates.xlsx', arr_lat, 'Coordinates', 'E'); 
xlswrite('kerala-coordinates.xlsx', arr_lng, 'Coordinates', 'F'); 