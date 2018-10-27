clc;clear;close;
images=loadimages('satellite-images\');
%images=reshape(images, 28,28,[]);
labels=loadlabels('out.xlsx');
rng(1);
w1=1e-2*rand([9 9 20]);
w5 =(2*rand(100,2000)-1)*sqrt(6)/sqrt(360+2000);
w0 =(2*rand(10,100)-1)*sqrt(6)/sqrt(10+100);
x=images(:,:,1:20);
d=labels(1:20);

for epoch= 1:100
    [w1,w5,w0]=train(w1,w5,w0,x,d);
end
save('train.mat');
