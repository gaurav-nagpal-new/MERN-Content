public class ReverseN {

    public static int reverseNumber(int n){
       int rev = 0;

       while(n > 0){
        int rem = n % 10;
        rev = rev * 10 + rem;
        n /= 10;
       }

       return rev;
    }

    public static void main(String[] args) {
       int n = 1234;

       System.out.println(reverseNumber(n));
    }
}
