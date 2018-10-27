function images=loadimages(filename)
%{fp=fopen(filename,'rb');
%assert(fp~=-1,['could not open',filename,'']);
%imagedata=fread(fp,1,'int32',0,'ieee-be');
%assert(imagedata==2051,['cannot read',filename,'']);
%numI=fread(fp,1,'int32',0,'ieee-be');
%numr=fread(fp,1,'int32',0,'ieee-be');
%numc=fread(fp,1,'int32',0,'ieee-be');
%images=fread(fp,inf,'unsigned char=>unsigned char');
%images=reshape(images,numc,numr,numI);

%images=permute(images,[2 1 3]);
%fclose(fp);
%images=reshape(images,size(images,1)*size(images,2),size(images,3));
%images=double(images)/255;
%end
image=dir(strcat(filename,'*.tif'));
n=length(image);
z=zeros(28,28,n);
for j=1:length(image)
    fn=fullfile(filename,image(j).name);
    
    I =imread(fn);
    Id=imresize(I,[28,28]);
    p=rgb2gray(Id);
   
    y1=im2double(p);
    z(:,:,j)=y1;
     images=z;
 
end
   
end
