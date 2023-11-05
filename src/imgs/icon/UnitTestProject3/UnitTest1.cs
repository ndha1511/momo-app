using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MethodLibrary;
using System.Text;

namespace UnitTestProject3
{
    [TestClass]
    public class UnitTest1
    {
        public TestContext TestContext { get; set; }

        [DataSource("Microsoft.VisualStudio.TestTools.DataSource.CSV",
            "|DataDirectory|\\UnitTestProject3\\data.csv", "data#csv", DataAccessMethod.Sequential),
            DeploymentItem("data.csv"), TestMethod]
        public void MaxNumberTest()
        {
            int? a = getNullOrInt(0);
            int? b = getNullOrInt(1);
            int? c = getNullOrInt(2);
            int? maxExpected = getNullOrInt(3);
            MethodLibrary.MethodLibrary mth = new MethodLibrary.MethodLibrary();
            if (a.HasValue && b.HasValue && c.HasValue && maxExpected.HasValue)
            {                             
                    int actual = mth.Max(a.Value, b.Value, c.Value);
                    Assert.AreEqual(maxExpected.Value, actual);
              
            }
            else
            {
                try
                {
                    int actual = mth.Max(a.Value, b.Value, c.Value);
                }
                catch (Exception ex)
                {
                    string expectedException = TestContext.DataRow[4].ToString();
                        Assert.AreEqual(expectedException, ex.GetType().Name);
                }
            }
        }
        private int? getNullOrInt(int col)
        {
            object value = TestContext.DataRow[col];
            return value != DBNull.Value ? Convert.ToInt32(value) :(int?)null;
        }
        [DataSource("Microsoft.VisualStudio.TestTools.DataSource.CSV",
             "|DataDirectory|\\UnitTestProject3\\datatest2.csv", "datatest2#csv", DataAccessMethod.Sequential),
             DeploymentItem("datatest2.csv"), TestMethod]
        public void ResolveQuadraticTest()
        {
            MethodLibrary.MethodLibrary mth = new MethodLibrary.MethodLibrary(); // Assuming MethodLibrary is the correct class name

            int a = Convert.ToInt32(TestContext.DataRow[0]);
            int b = Convert.ToInt32(TestContext.DataRow[1]);
            int c = Convert.ToInt32(TestContext.DataRow[2]);
            float x1expected = TestContext.DataRow[3].ToString().Equals("") ? float.NaN : float.Parse(TestContext.DataRow["x1"].ToString());
            float x2expected = TestContext.DataRow[4].ToString().Equals("") ? float.NaN : float.Parse(TestContext.DataRow["x2"].ToString());
            string encodedString = TestContext.DataRow[5].ToString();
            byte[] byteArray = Encoding.Default.GetBytes(encodedString);
            string decodedString = Encoding.UTF8.GetString(byteArray);

            float x1, x2;
            string actual = mth.SolveQuadratic(a, b, c, out x1, out x2);

            Assert.AreEqual(x1expected, x1); // 0.001f is a small tolerance for float comparison
            Assert.AreEqual(x2expected, x2);
            Assert.AreEqual(decodedString , actual);
        }
    }
    
}
