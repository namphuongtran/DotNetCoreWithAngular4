using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrankBank.Models
{
    public class AccountDetail
    {
        public AccountSummary AccountSummay { get; set; }
        public List<AccountTransaction> AccountTransactions { get; set; }
    }
}
