public class Bubble {
    public static void main(String[] args) {
         // implementation of bubble sort
        int []arr = {1, 2, 3, 4, 5};
        int n = 5;
        boolean isSwapped =  false;

        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    // swap
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    isSwapped = true;
                }
            }
            if(!isSwapped){
                break;
            }
        }

        // print
        for (int i = 0; i < n; i++)
        {
            System.out.println(arr[i]);
        }

        if(!isSwapped){
            System.out.println("Array was alrady sorted");
        }

    }
}
