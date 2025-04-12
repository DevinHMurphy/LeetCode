class Solution_392 {

    public static void main(String[] args){

		boolean test = isSubsequence("acb","ahbgdc");

        System.out.println(test);
	
	}

    private static boolean isSubsequence(String s, String t) {
        int sLength = s.length();
        int tLength = t.length();
        int previousCharacterIndex = 0;
        boolean isFound = false;
        if (sLength > tLength) return false;

        for(int i = 0; i < sLength; i++){
            char temp = s.charAt(i);
            isFound = false;
            for (int x = previousCharacterIndex; x < tLength; x++){
                if (t.charAt(x) == temp){
                    previousCharacterIndex = x+1;
                    isFound = true;
                    System.out.println(x);
                    break;
                }
                if (x == tLength- 1) {
                    System.out.println(temp + " not found in t");
                    return false;
                }
            }
            if (!isFound) return false;
        }
        return true;

    }
}