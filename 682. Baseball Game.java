class Solution {
    public int calPoints(String[] operations) {
        ArrayList<Integer> list=new ArrayList<Integer>();

        for(String s:operations){
            int pIndex=list.size()-1;
            int ppIndex=list.size()-2;
            int result;
            switch(s){
                case "+":
                    result=list.get(pIndex)+list.get(ppIndex);
                    list.add(result);
                    break;
                case "D":
                    result=(list.get(pIndex))*2;
                    list.add(result);
                    break;
                case "C":
                    list.remove(pIndex);
                    break;
                default :
                    int num=Integer.parseInt(s);
                    list.add(num);
                    break;
            }
        }
int answer=0;
        for(int num:list){
            answer+=num;
        }
    return answer;
    }
    }