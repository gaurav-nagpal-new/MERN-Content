public class PracArray{
    public static void main(String[] args) {
        // Create array, print it with for and for each loop
        // Create 2D array, print it with for and for each loop

        // creating array with elements
        int []arr = {1, 2, 3, 4, 5};

        // print the array using for loop 
        System.out.println("Array with for loop");
        for(int i = 0; i < arr.length; i++){
            System.out.println(arr[i]);
        }

        // print the array using for each loop
        for(int ele : arr){
            System.out.println(ele);
        }
    }
}