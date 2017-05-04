using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrankBank.Models
{
    public class AccountTransaction
    {
        public DateTimeOffset TransactionDate { get; set; }
        public string Description { get; set; }
        public double Ammount { get; set; }
    }
}
