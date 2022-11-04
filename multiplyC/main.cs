// This code does not execute properly. Try to figure out why.



public class CustomMath {
    public static int multiply(int a, int b) {
        return a * b;
    }
}


// test cases


using NUnit.Framework;
using System;
[TestFixture]
public class CustomMathTest
{
  [Test]
  public void ShouldMultiple()
  {
    Assert.AreEqual(2, CustomMath.multiply(2, 1));
    Assert.AreEqual(8, CustomMath.multiply(2, 4));
  }
}