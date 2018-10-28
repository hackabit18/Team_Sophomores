clc; clear; close;
data = xlsread('G:\Project-ELON\assets\kerala-coordinates.xlsx');
 [~,txtData] = xlsread('G:\Project-ELON\assets\kerala-coordinates.xlsx');
lat = data(:,1);
lng = data(:,2);
res = data(:,3);

arr_lat = zeros(length(lat));
arr_lng = zeros(length(lng));

srcFiles = dir('G:\Project-ELON\assets\elevation-maps\*.png');  % the folder in which ur images exists
for j = 1 : length(srcFiles)
    filename = fullfile('G:\Project-ELON\assets\elevation-maps\', srcFiles(j).name);
    I = imread(filename);
    red = I(:,:,1);
    green = I(:,:,2);
    blue = I(:,:,3);
    %Convert image to grayscale
    out = red < 120 & green > 120 & blue < 180;
    out2 = imfill(out, 'holes');
    out3 = bwmorph(out2, 'dilate');
    stats = regionprops(out3);
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
    
    %Calculations
    imgh = 582;
    imgw = 512;
    
    platdiff = latc - (imgw / 2);
    plngdiff = lngc - (imgh / 2);
    
    rplatdiff = platdiff * res(j);
    rplngdiff = plngdiff * res(j);
    
    deglat = rplatdiff / 111045;
    deglng = rplngdiff / 111045;
    
    newlatpoint = lat(j) + deglat;
    newlngpoint = lng(j) + deglng;
    
    arr_lat(j) = newlatpoint;
    arr_lng(j) = newlngpoint;
end

xlswrite('G:\Project-ELON\assets\kerala-coordinates.xlsx', txtData, 'Coordinates', 'A'); 
xlswrite('G:\Project-ELON\assets\kerala-coordinates.xlsx', lat, 'Coordinates', 'B'); 
xlswrite('G:\Project-ELON\assets\kerala-coordinates.xlsx', lng, 'Coordinates', 'C'); 
xlswrite('G:\Project-ELON\assets\kerala-coordinates.xlsx', res, 'Coordinates', 'D'); 
xlswrite('G:\Project-ELON\assets\kerala-coordinates.xlsx', arr_lat, 'Coordinates', 'E'); 
xlswrite('G:\Project-ELON\assets\kerala-coordinates.xlsx', arr_lng, 'Coordinates', 'F'); 