class Solution {
    public int lengthOfLastWord(String s) {
        int leng=0;
        int end=-1;
        for(int i=s.length()-1;i>=0;i--){
            char c=s.charAt(i);
                if(c!=' ' && end==-1){
                    end=i;
                }else if(end!=-1 && c==' '){
                        return end-i;
                }
        }
        return end+1;
    }
}