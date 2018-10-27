function images=loadimages(filename)


image=dir(strcat(filename,'*.tif'));
n=length(image);
z=zeros(28,28,n);
for j=1:length(image)
    fn=fullfile(filename,image(j).name);
    
    I =imread(fn);
    Id=imresize(I,[28,28])
    p=rgb2gray(Id);
   
    y1=im2double(p);
    z(:,:,j)=y1
     images=z
 
    
   
end
