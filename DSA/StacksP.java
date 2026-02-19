import java.util.*;

class StacksP{
    public static void testStacks(String[] args) {
        //  Using stacks in Java
        Stack<Integer> st = new Stack<>();
        st.push(1);
        st.push(2);

        System.out.println(st);
        System.out.println(st.peek());

        st.pop();
        System.out.println(st);
        System.out.println(st.peek());

        System.out.println(st.empty());

        st.push(10);
        st.push(20);
        System.out.println(st);
        System.out.println(st.search(1));    
    }
}