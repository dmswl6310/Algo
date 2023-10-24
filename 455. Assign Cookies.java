import java.util.Arrays;

class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);

        int i=0;
        int j=0;
        int content=0;

        while(i<s.length && j<g.length){
            if(s[i]>=g[j]){
                content++;
                j++;
            }
            i++;
        }

        return content;
    }
}