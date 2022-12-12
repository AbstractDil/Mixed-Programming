/* Addition of Two Matrix (50x50) 

By Sagar Nandy (ADMIN) 
https://nandysagar.in/

 */


#include <stdio.h>

int main()
{
  int A[50][50],B[50][50],C[50][50],i,j,m,n;
  
       printf("\n\nAddition of two Matrices :\n");
       printf("------------------------------\n");  
        printf("Enter the number of rows (between 1 to 50 ): ");
       scanf("%d", &m); 
        printf("Enter the number of columns (between 1 to 50 ): ");
       scanf("%d", &n); 
  
    /* Stored values into the array*/
   printf("\n\n");

       printf("Enter elements of  A matrix :\n");
       printf("------------------------------\n"); 

       for(i=0;i<m;i++) //  row
        {
            for(j=0;j<n;j++) // column
            {
	           printf("element - [%d],[%d] : ",i,j);
	           scanf("%d",&A[i][j]);
            }
        }   
  
   printf("\n\n");

       printf("Enter elements of  B matrix :\n");
       printf("------------------------------\n"); 

       for(i=0;i<m;i++)
        {
            for(j=0;j<n;j++)
            {
	           printf("element - [%d],[%d] : ",i,j);
	           scanf("%d",&B[i][j]);
            }
        }    
   printf("\n A matrix is :\n");
  printf("------------------------------\n"); 

  for(i=0;i<m;i++)
    {
      printf("\n\t");
      for(j=0;j<n;j++)
           printf("%d\t",A[i][j]);
    }

   printf("\n\n");

  
  printf("\n B matrix is :\n");
  printf("------------------------------\n"); 

  for(i=0;i<m;i++)
    {
      printf("\n\t");
      for(j=0;j<n;j++)
      printf("%d\t",B[i][j]);
    }
/* calculate the sum of the matrix */   
   printf("\n\n");

   for(i=0;i<m;i++)
       for(j=0;j<n;j++)
            C[i][j]=A[i][j]+B[i][j];
   printf("\nThe Addition of two matrix is : \n");
    printf("------------------------------\n"); 

   for(i=0;i<m;i++){
       printf("\n\t");
       for(j=0;j<n;j++)
            printf("%d\t",C[i][j]);
   }
   printf("\n\n");
}
