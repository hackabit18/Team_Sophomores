clc;clear;close;
images=loadimages('satellite-images\');
%images=reshape(images, 28,28,[]);
labels=loadlabels('out.xlsx');
labels(labels==0)=2;
rng(1);
w1=1e-2*rand([9 9 20]);
w5 =(2*rand(100,2000)-1)*sqrt(6)/sqrt(360+2000);
w0 =(2*rand(10,100)-1)*sqrt(6)/sqrt(10+100);
x=images(:,:,1:12);
d=labels(1:12);

for epoch= 1:100
    [w1,w5,w0]=train(w1,w5,w0,x,d);
end
save('train.mat');
x=images(:,:,13:22);
d=labels(13:22);
acc=0; n=length(d);
for k=1:n
         z=x(:,:,k);
        y1=Conv(z,w1);
        y2=ReLu(y1);
        y3=pool(y2);
        y4=reshape(y3,[],1);
        y5=w5*y4;
        y6=ReLu(y5);
        y7=w0*y6;
        y=Softmax(y7);
        [~,i]=max(y);
        if i==d(k)
            
        acc=acc+1;
        else
            fprintf('rejected is %f\n',k);
        end
end
acc=acc/n;
fprintf('acc is%f\n',acc);
