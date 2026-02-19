import java.util.*;

public class QueuesP {
    public static void main(String[] args) {
        
        // Priority Queue - by default implements minHeap

        PriorityQueue<Integer> pq = new PriorityQueue<>();

        pq.add(100);
        pq.add(50);
        pq.add(30); // highest priority

        System.out.println(pq); // represents the minHeap internal implementation not the sorted array

        System.out.println(pq.poll()); // removes and return the first element 
        // get the first element  - peek()

        System.out.println(pq); // check what is the next element

        // LinkedList Queue

        Queue<Integer> pql = new LinkedList<>();

        pql.add(100);
        pql.add(50);
        pql.add(30);

        System.out.println(pql); // represents the minHeap internal implementation not the sorted array

        System.out.println(pql.poll()); // removes and return the first element 
        // get the first element  - peek()

        System.out.println(pql); 

        Deque<String> d = new ArrayDeque<>();

        // add() and offer() both inserts at the end - some differences - 

        // add() method to insert
        d.add("The"); // inserts at the end
        d.addFirst("To");
        d.addLast("Geeks");

        // offer() method to insert
        d.offer("For"); // insertion at the end
        d.offerFirst("Welcome");
        d.offerLast("Geeks");

        System.out.println("ArrayDeque : " + d);
        
    }
}
