if alert == 1
    data = xlsread('alertpoint.xlsx');
    Z = imsubtract(I,bi_thresh);
    Z = imfill(Z, 'holes');
    Z = im2bw(Z);
    %imshow(Z);
    dstats = regionprops(Z);
    
    N_LAT = 9.9501638;
    S_LAT = 8.9533631;
    W_LNG = 75.912271;
    E_LNG = 76.908183;
    W_H = 5490;
    
    LNG_DIFF = E_LNG - W_LNG;
    LNG_DIFF_FACTOR = LNG_DIFF / W_H; 
    LAT_DIFF = N_LAT - S_LAT;
    LAT_DIFF_FACTOR = LAT_DIFF / W_H; 
    
    arr_lat = zeros(length(dstats),1);
    arr_lng = zeros(length(dstats),1);
   
    index = 1;
    threshold = 500;
    
    for u = 1 : length(dstats)
        obj = dstats(u);
        
        if obj.Area > threshold
            centeroid = obj.Centroid;
            arr_lat(index) = centeroid(1);
            arr_lng(index) = centeroid(2);

            arr_lat(index) = ( LAT_DIFF_FACTOR * arr_lat(index) ) + S_LAT;
            arr_lng(index) = ( LNG_DIFF_FACTOR * arr_lng(index) ) + W_LNG;

            if arr_lng(index) > 76.35       %beginning of coast-line
               index = index + 1;
            end
        end
    end
    
    xlswrite('alertpoint.xlsx', arr_lat, 'Coordinates', 'A'); 
    xlswrite('alertpoint.xlsx', arr_lng, 'Coordinates', 'B'); 
end