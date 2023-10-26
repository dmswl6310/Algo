import java.util.Map;

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        Map<Character,Integer> map=new HashMap();

        for(int i=0;i<magazine.length();i++){
            char alphabet=magazine.charAt(i);
            if(map.containsKey(alphabet)){
                map.replace(alphabet,map.get(alphabet)+1);
            }else{
                map.put(alphabet,1);
            }
        }

        for(int i=0;i<ransomNote.length();i++){
            char ransom=ransomNote.charAt(i);

            if(map.containsKey(ransom)){
                if(map.get(ransom)<=0) return false;
                 map.replace(ransom,map.get(ransom)-1);
            }else{
                return false;
            }
        }
        return true;
    }
}
