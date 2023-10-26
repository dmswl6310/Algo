import java.util.Arrays;

class Solution {
int dp[][];
// 순서 0->1

    public boolean canWinNim(int n) {
    dp=new int [n+1][2];

    for(int i=0;i<=n;i++){
        Arrays.fill(dp[i],-1);
    }
        int answer=isWinner(n,0);

        if(answer==0) return true;
        else return false;
    }

    public int isWinner(int num,int p){

    // num개 남았을때 p 차례
        if(dp[num][p]!=-1) return dp[num][p];
        else if(num==3 ||num==2 || num==1) {
            dp[num][p]=p;
            return p;
        }
        else{
            if((p==isWinner(num-3,1-p)) || (p==isWinner(num-2,1-p))||(p==isWinner(num-1,1-p))){
                dp[num][p]=p;
            }else{
                dp[num][p]=1-p;
            }


            return dp[num][p];
        }
    }
}
class S{
    public static void main(String[]args){
        Solution s=new Solution();
        System.out.println(s.canWinNim(1348820612));
    }
}