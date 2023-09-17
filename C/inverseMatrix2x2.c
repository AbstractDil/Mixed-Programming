/*Inverse of 2*2 Matrix By Sagar Nandy*/

#include <stdio.h>

int main(void) {

  // declare variable

  int A[2][2], i, j, D, adjA[2][2];
  float invA[2][2];
  /*======= EXPLANATION ========
   |
   |  1) A represents 2*2 matrix.
   |  2) i,j ---- for loop.
   |  3) Inverse value taken float because integer give zero .
 ==================================
  */

  // Input value from user

  printf("\n");
  printf("----------------------------- \n");

  printf(" Enter the 2x2 elements of matricx  \n");
  printf("----------------------------- \n");


  // read input

  for (i = 0; i < 2; i++) {
    for (j = 0; j < 2; j++) {
      printf("element - [%d],[%d] : ",i,j);
      scanf("%d", &A[i][j]);
    }
  }

  // print matrix

  printf("-----------------------------");
  printf("\n");

  printf("The Matrix is \n");

  for (i = 0; i < 2; i++) {
    printf("\n");

    for (j = 0; j < 2; j++) {
      printf("%d\t", A[i][j]);
    }
    printf("\n");
  }
  printf("-----------------------------");

  /* Calculate determinant of matrix A */
  D = (A[0][0] * A[1][1]) - (A[0][1] * A[1][0]);

  (D == 0) ? printf("\n Determinant cannot be ZERO \n")
           : printf(" \n Determinant value is %d \n ", D);

  printf("-----------------------------\n");

  /* Find adjoint of matrix A */

  adjA[0][0] = A[1][1];
  adjA[1][1] = A[0][0];
  adjA[0][1] = -A[0][1];
  adjA[1][0] = -A[1][0];

  printf("\n The Adjoint Matrix is \n");

  for (i = 0; i < 2; i++) {
    printf("\n");
    for (j = 0; j < 2; j++) {
      printf(" %d\t ", adjA[i][j]);
    }
    printf("\n");
  }

  printf("-----------------------------\n");

  /* Find Inverse of A */
  printf("\n Inverse of Matrix A is\n");
  printf("-----------------------------\n");

  for (i = 0; i < 2; i++) {
    printf("\n");

    for (j = 0; j < 2; j++) {
      invA[i][j] = (adjA[i][j]) / (float)D;
      printf("%0.1f\t ", invA[i][j]);
    }
    printf("\n");
  }
  printf("\n");
  printf("----------------------------- \n");
  return 0;
}