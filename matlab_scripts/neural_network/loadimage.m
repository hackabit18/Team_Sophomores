function image=loadimage(fn)
I =imread(fn);
    Id=imresize(I,[28,28])
    p=rgb2gray(Id);
   
    image=im2double(p);