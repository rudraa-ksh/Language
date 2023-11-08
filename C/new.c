#include<stdio.h>
struct my_datatype{
    int roll_no;
    float marks;
    char name[10];
};
void display(struct my_datatype stud);
int main()
{
    struct my_datatype stud_1;
    printf("sdfghj\n");
    scanf("%d\n",&stud_1.roll_no);
    scanf("%f\n",&stud_1.marks);
    scanf("%s",stud_1.name);
    display(stud_1);
    return 0;
}
void display(struct my_datatype stud){
    printf("%d\n%.2f\n%s",stud.roll_no,stud.marks,stud.name);

}

