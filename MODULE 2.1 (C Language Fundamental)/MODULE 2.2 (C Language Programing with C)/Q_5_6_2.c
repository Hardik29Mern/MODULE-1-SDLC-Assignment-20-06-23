//WAP to print table up to given numbers
#include<stdio.h>
main(){
	int n,i;
	printf("Enter the value ");
	scanf("%d",&n);
	for(i=1;i<=10;i++){
		printf("%d*%d=%d\n",n,i,n*i);
	}
	
}
