srcFiles = dir('c:\Users\nisha\Desktop\matlab_scripts\satellite-images\*.tif');  % the folder in which ur images exists
area = zeros(length(srcFiles));
num = zeros(length(srcFiles));

RedThU = 157;
RedThL = 88;
GreenThU = 183;
GreenThL = 121;
BlueThU = 120;
BlueThL = 50;

for j = 1 : length(srcFiles)
    num(j) = j;
    filename = fullfile('c:\Users\nisha\Desktop\matlab_scripts\satellite-images\', srcFiles(j).name);
    I = imread(filename);
    %seperate water from picture
    red = I(:,:,1);
    green = I(:,:,2);
    blue = I(:,:,3);   
    %d = impixel(I);
    I = red < RedThU & red > RedThL & green < GreenThU & green > GreenThL & blue < BlueThU & blue > BlueThL;
    I = bwmorph(I, 'dilate');
    I = imfill(I, 'holes');
    I = imcomplement(I);
    
    granuals_correction = 5;
    stats = regionprops(I);
    
    for i = 1: length(stats)
     if(stats(i).Area > granuals_correction)
        area(j) =  area(j) + stats(i).Area;  
     end   
    end
end

m = mode(area);
modeline = m * ones(length(srcFiles));
tide_factor = 0.05;
tide_corr = (m + tide_factor * m) * ones(length(srcFiles));
plot(num, area);
hold on;
plot(num, num1);
plot(num, tide_corr);
hold off;
title('Water Area Plot');
xlabel('Picture Number');
ylabel('Water Area');