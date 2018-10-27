function labels=loadlabels(filename)
%fp=fopen(filename,'rb');
%data=fread(fp,1,'int32',0,'ieee-be');
%numl=fread(fp,1,'int32',0,'ieee-be');
%labels=fread(fp,inf,'unsigned char');
%fclose(fp);
labels=xlsread(filename);
end