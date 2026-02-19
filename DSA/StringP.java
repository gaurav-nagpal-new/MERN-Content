public class StringP {
    public static void practice(){
        /*
        Theory
        String:
        String is a class in Java.
        Objects of String are immutable (cannot be changed after creation).
        Stored in a special memory area called String Constant Pool (SCP).
        It allows string sharing → memory efficient.
        It is thread-safe for sharing without synchronization.

        String Pool -> SCP is a separate block inside the heap where Java stores string literals.
        Example:
        String s1 = "hello";
        String s2 = "hello";

        Both refer to same object from string pool. But, When we create like this:
        String s3 = new String("hello"); this will create a separate object in heap even it is present in the heap

        String Methods for a String s:

        s.length();
        s.charAt(3);
        s.substring(2);
        s.substring(2, 5); and more will be used in the leetcode

        StringBuffer:
        A mutable (modifiable) sequence of characters.
        Thread-safe (methods are synchronized).
        Slower than StringBuilder because of synchronization.

        StringBuilder
        Also mutable like StringBuffer.
        Not thread-safe (no synchronization).
        Faster than StringBuffer (as there is no synchronization).
         */

        // String
        String str = "Hello";
        String strNew = "Hello";
        System.out.println(str == strNew); // == compares address and value of both, true
        System.out.println(str.toCharArray()); // Hello
//
        String strLatest = new String("Hello"); //  another address in heap as created with new
        System.out.println(str == strLatest); // can fix this with equals method of String
//
        System.out.println(str.equals(strLatest));
//        System.out.println(str.length()); // "Hello"
//        System.out.println(str.charAt(2)); //
//        System.out.println(str.substring(2)); // start from 2 index, llo
//        System.out.println(str.substring(2,4)); // start from 2 index goes to endIdx - 1 i.e. end is exclusive and start is inclusive
//      H. W -> read and try toUpperCase(), toLowerCase(), trim(), split() on strings
//        String strSplit = "Hi I am Gaurav";
//        String[] ans = strSplit.split("");
//        System.out.println(Arrays.toString(ans));
//        System.out.println("        Hi I am a good boy      ".trim());
//        StringBuilder:
        StringBuilder sb = new StringBuilder();
        sb.append("Proud"); // "Proud"
        sb.append("Man"); // "ProudMan"
        System.out.println(sb);

        sb.insert(0, " "); // " ProudMan"
        sb.insert(0, "Woman"); // "Woman ProudMan"
        sb.insert(0, "Proud"); // "ProudWoman ProudMan"
        System.out.println(sb);
        // same methods for stringBuffer
    }
}