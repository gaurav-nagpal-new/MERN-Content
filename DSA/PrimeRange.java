public class PrimeRange {
    
    public static boolean isPrime(int n){
        for(int i = 2; i <= Math.sqrt(n); i++){
            if(n % i == 0){
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        int left = 3;
        int right = 10;

        for(int i = left; i <= right; i++){
            if(isPrime(i)){
                System.out.println(i);
            }
        }
    }
}
