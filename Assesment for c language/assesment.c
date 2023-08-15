#include<stdio.h>
#include<string.h>
#include <stdlib.h>

char reverseString();
char  concat();
char stringLength();
void copyString();
void isPalindrome();
void frequency();

main(){
	int i;
	char str[100];
	while(1){
		printf("\n\n **Main Menu**\n ");
		printf("\n1. reverse a string\n");
		printf("\n2. Concatenation  \n");
		printf("\n3. Palindrome \n ");
		printf("\n4. Copy a string \n");
		printf("\n5. Length of the string \n ");
		printf("\n6. Frequency of character in s string\n ");
		printf("\n7. Find number of vowels and consonants\n");
		printf("\n8. Find number of blank spaces and digits \n");
		printf("\n9. for exit\n");
		printf("\nPlease Enter your choice : ");
		scanf("%d",&i);
		switch (i){
			case 1:
				reverseString();	
				break;
			case 2:
				concat();
				break;
			case 3:
				isPalindrome();
				break;
			case 4:
				copyString();	
				break;
			case 5:
				stringLength();
				break;
			case 6:
				frequency();
				break;
			case 7:
				reverseString();	
				break;
			case 8:
				concat();
				break;					
			case 9:
				exit(0);
			default:
				printf("Wrong choice");
				break;
		}
	}
}
char reverseString(){
	char str[100];
	printf("\nEnter your string here:");
	scanf("%s",&str);
	printf("This is your reverse string %s\n",strrev(str));
}

char concat(){
	char str1[100],str2[100];
	
	printf("\n Enter your string1 here: ");
	scanf("%s",&str1);
	printf("\n Enter your string 2 here: ");
	scanf("%s",&str2);
	strcat(str1,str2);
	printf("This is your concat string %s",str1);
}

char stringLength(){
	char str[100];
	printf("\nEnter your  string here:");
	scanf("%s",&str);
	printf("This is your length of string %d\n",strlen(str));
}

void copyString(){
	char str1[100],str2[100];
	printf("\nEnter your  string1 here:");
	scanf("%s",&str1);
	printf("\nEnter your  string2 here:");
	scanf("%s",&str2);
	strcpy(str1,str2);
	printf("\nThis is your copy a string is %s\n",str1);
}

void isPalindrome(){
	char str[100],revsedStr[100];
	printf("\nEnter your  string here:");
	scanf("%s",&str);
	strcpy(revsedStr, str);
	strrev(revsedStr);
	if(strcmp(str,revsedStr)==0){
		printf("\ngiven string is palindrome ");		
	}else{
		printf("\ngiven string is not  palindrome");		
	}
}

void frequency(){
	
}
