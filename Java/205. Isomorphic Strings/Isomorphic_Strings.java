import java.util.ArrayList;


class Solution_205 {

	public static void main(String[] args){

		boolean test = isIsomorphic("abcdefghijklmnopqrstuvwxyzva","abcdefghijklmnopqrstuvwxyzck");

        System.out.println(test);
	
	}

    private static boolean isIsomorphic(String s, String t) {
        if (s.length() != t.length()) return false;
        String isoS = mapStirng(s);
        String isoT = mapStirng(t);

        return isoS.equals(isoT);
    }
    
    
    private static String mapStirng(String str){ 
        int length = str.length();   
        String characterIndex = "";
        ArrayList<Character> uniqueCharacterList = new ArrayList<Character>(length);

        //parse the char array
        for (int i = 0; i < str.length(); i++){
            char currentChar = str.charAt(i);
            if(!uniqueCharacterList.contains(currentChar)){
                //System.out.println("new char: adding " + currentChar +" to unique list");
                uniqueCharacterList.add(currentChar);
            } 
            characterIndex = characterIndex  +Integer.toString(uniqueCharacterList.indexOf(currentChar)) + ",";
        }
        System.out.println(characterIndex);
        return characterIndex;
    }
    
}
