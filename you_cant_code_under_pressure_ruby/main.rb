#Code as fast as you can! You need to double the integer and return it.



# solution
def double_integer(i)
  return i*2
end



# test cases

describe "Basic Tests" do
  it "should pass basic tests" do
    Test.assert_equals(double_integer(2), 4)
    Test.assert_equals(double_integer(4), 8)
    Test.assert_equals(double_integer(-10), -20)
    Test.assert_equals(double_integer(0), 0)
    Test.assert_equals(double_integer(100), 200)
  end
end
  
describe "Random Tests" do
  it "should work for random tests" do
    
    100.times do 
      qwe1 = rand(-200...200)      
      Test.assert_equals(double_integer(qwe1), qwe1*2)
    end
  end
end