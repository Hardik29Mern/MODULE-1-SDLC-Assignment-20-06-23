#include<stdio.h>
main()
{
	int n,q,A,TA=0;
	char m;
	printf("----------------MENU----------------");
	printf("\n\n 1.Pizza       price=180rs/pcs");
	printf("\n\n 2.Burger      price=100rs/pcs");
	printf("\n\n 3.Dosa        price=120rs/pcs");
	printf("\n\n 4.Idli        price=50rs/pcs");
	printf("\n\n****************************************************************");


	do
	{
		printf("\n\n Please Enter Your Choice : ");
		scanf("%d",&n);
	switch(n)
	{  
		case 1: printf("\n\n You have selected Pizza!!..");
				printf("\n\n Enter the quantity = ");
				scanf("%d",&q);
				A=q*180;
				printf("\n Amount : %d ",A);
				break;
		case 2: printf("\n\n You have selected Burger!!..");
				printf("\n\n Enter the quantity = ");
				scanf("%d",&q);
				A=q*100;
				printf("\n Amount : %d ",A);
				break;
		case 3: printf("\n\n You have selected Dosa!!..");
				printf("\n\n Enter the quantity = ");
				scanf("%d",&q);
				A=q*120;
				printf("\n Amount : %d ",A);
				break;
		case 4: printf("\n\n You have selected Idli!!..");
				printf("\n\n Enter the quantity = ");
				scanf("%d",&q);
				A=q*50;
				printf("\n Amount : %d ",A);
				break;
		default: printf("You have entered Wrong input !!!......");
				break;
	}
	TA+=A;
	printf("\n\n Total Amount is = %d ",TA);
	printf("\n\n***************************************************");
	printf("\n\n Do You want to Place more order ? y or n :");
	scanf(" %c",&m);
	}while(m=='y');
	

}
