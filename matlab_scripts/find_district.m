data = xlsread('kerala-coordinates.xlsx');
[~,txtData] = xlsread('kerala-coordinates.xlsx');
lat = data(:,1);
lng = data(:,2);

i = 1;

name = {};
alertlat = {};
alertlng = {};
wlat = {};
wlng = {};
C = {};

for m = 1 : index
    arr_latm = arr_lat(m);
    arr_lngm = arr_lng(m);
    mk = intmax;
    for n = 1 : length(lat)
        latn = lat(n);
        lngn = lng(n);
        
         a1=((arr_latm - latn) ^ 2);
         a2=((arr_lngm - lngn) ^ 2);
         d = sqrt(a1+a2);
         if mk > d
            mk = d;
            ll = n;
         end
    end
    
     name(i) = txtData(ll);
     alertlat(i) = num2cell(arr_latm);
     alertlng(i) = num2cell(arr_lngm);
     i = i + 1;
end

B = sort(name);

p = 1;
imname = B(1);
for k = 2 : length(B)
    C(p) = imname;
    if strcmp(imname, B(k)) == 0
        p = p + 1;
        imname = B(k);
    end
end

for j = 1 : length(C)
    for o = 1 : length(name)
        if strcmp(C(j), name(o)) == 0
            wlat(j) = alertlat(o); 
            wlng(j) = alertlng(o);
        end
    end
end


