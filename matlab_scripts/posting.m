%post alert result

url = 'http://localhost:5454/api/latestSatelliteImage';
options = weboptions('RequestMethod','post', 'MediaType','application/json');

for e = 1 : length(C)
    Body.Location= cell2mat(C(e));
    Body.Lattitude= cell2mat(alertlat(e));
    Body.Longitude= cell2mat(alertlng(e));
    Body.TimeStamp= 1600;
    Body.Area= area;
    Body.CriticalFactor= perc;
    Body.Alert = alert;
    response = webwrite(url, Body, options);
end

data = webread('http://localhost:5454/api/latestSatelliteImage');