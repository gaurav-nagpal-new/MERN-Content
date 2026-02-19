public class LinkedListP {

    Node head; // head of list

    /*
    Why is Node declared as a static inner class?
    Because a Node does not need to access any instance members of the LinkedList class, so there is no reason to make it a non-static inner class.
    If it was non-static, then below:
    LinkedList list = new LinkedList();
    Node new_node = list.new Node(data);// require parent clas object to access the inner class data

     */
    static class Node {

        int data;
        Node next;

        Node(int d)
        {
            data = d;
            next = null;
        }
    }

    // Method to insert a new node at the last of the linked list
    public static void insertEnd(LinkedListP list, int data)
    {
        // Create a new node with given data
        Node new_node = new Node(data);

        // If the Linked List is empty,
        // then make the new node as head
        if (list.head == null) {
            list.head = new_node;
        } else {
            // Else traverse till the last node
            // and insert the new_node there
            Node last = list.head;
            while (last.next != null) {
                last = last.next;
            }

            // Insert the new_node at last node
            last.next = new_node;
        }
    }

    // Method to insert the element at the starting of the linked list
    public static void insertFirst(LinkedListP list, int data){
        Node node = new Node(data);
        node.next = list.head;
        list.head = node;
    }

    public static void deleteFirst(LinkedListP list){
        list.head = list.head.next;
    }

    public static void deleteEnd(LinkedListP list){
        Node last = list.head;
        while(last.next.next != null){
            last = last.next;
        }
        last.next = null;
    }

    // Method to print the LinkedList. - Traversing
    public static void printList(LinkedListP list)
    {
        Node currNode = list.head;

        System.out.print("LinkedList: ");

        // Traverse through the LinkedList
        while (currNode != null) {
            // Print the data at current node
            System.out.print(currNode.data + " ");

            // Go to next node
            currNode = currNode.next;
        }
        System.out.println();
    }

}