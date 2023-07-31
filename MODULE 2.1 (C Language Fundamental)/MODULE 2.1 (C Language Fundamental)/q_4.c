/*WAP to find simple interest*/
#include<stdio.h>
main(){
    float a,b,c;
	printf("Enter the value of a:");
	scanf("%f",&a);
	printf("Enter the value of b:");
	scanf("%f",&b);
	printf("Enter the value of c:");
	scanf("%f",&c);
	float simple_interest=(a*b*c)/100;
	printf("simple interest=%f\n",simple_interest);
	
}
