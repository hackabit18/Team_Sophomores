function [w1,w5,w0]=train(w1,w5,w0,x,d)
alpha=0.01;
beta=0.95;
m1=zeros(size(w1));
m5=zeros(size(w5));
m0=zeros(size(w0));
n=length(d);
bsize=10;
blist=1:bsize:(n-bsize+1);

for batch=1:length(blist)
    dw1=zeros(size(w1));
    dw5=zeros(size(w5));
    dw0=zeros(size(w0));
    begin=blist(batch);
    for k=begin:begin+bsize-1
        z=x(:,:,k);
        y1=Conv(z,w1);
        y2=ReLu(y1);
        y3=pool(y2);
        y4=reshape(y3,[],1);
        y5=w5*y4;
        y6=ReLu(y5);
        y7=w0*y6;
        y=Softmax(y7);
        l=zeros(10,1);
        l(sub2ind(size(l),d(k),1))=1;
        e=l-y;
        delta=e;
        e5=w0'*delta;
        delta5 =(y6>0).*e5;
        e4=w5'*delta5;
        e3=reshape(e4,size(y3));
        e2=zeros(size(y2));
        w3=ones(size(y2))/(2*2);
        for c=1:20
            e2(:,:,c)=kron(e3(:,:,c),ones([2 2])).*w3(:,:,c);
        end
        delta2=(y2>0).*e2;
        delta1_x=zeros(size(w1));
        for c=1:20
        delta1_x(:,:,c)=conv2(z(:,:),rot90(delta2(:,:,c),2),'valid');
        end
        dw1=dw1+delta1_x;
        dw5=dw5+delta5*y4';
          dw0=dw0+delta*y6';
    end
    m1=alpha*dw1+beta*m1;
    w1=w1+m1;
    
    m1=alpha*dw1+beta*m1;
    w5=w5+m5;
    
    m0=alpha*dw0+beta*m0;
    w0=w0+m0;
end
end