using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CrankBank.Models;

namespace CrankBank.Controllers
{
    [Route("api/[controller]")]
    public class BankController : Controller
    {
        private static AccountSummary[] accountSummaries = new AccountSummary[]
        {
            new AccountSummary(){ AccountNumber="123-456-7890",Balance=1234567890,Name="Southern",Type=AccountType.Checking},
            new AccountSummary(){ AccountNumber="023-756-2891",Balance=1234567890,Name="Gil",Type=AccountType.Saving},
            new AccountSummary(){ AccountNumber="323-556-3898",Balance=1234567890,Name="Adi",Type=AccountType.Credit},
        };

        [HttpGet("[action]")]
        public IActionResult GetAccountSummaries()
        {
            return new ObjectResult(accountSummaries);
        }

        [HttpGet("[action]/{id}")]
        public IActionResult GetAccountDetail(string id)
        {
            var summary = accountSummaries.FirstOrDefault(ac => ac.AccountNumber == id);
            if (summary == null)
            {
                return NotFound();
            }
            var random = new Random();
            var transactions = new List<AccountTransaction>();
            for (int i = 0; i < 15; i++)
            {
                transactions.Add(new AccountTransaction()
                {
                    TransactionDate = DateTimeOffset.Now - TimeSpan.FromDays(i),
                    Description = $"Transaction #{i}",
                    Ammount = random.NextDouble() * 500 - 250
                });
            }
            return new ObjectResult(new AccountDetail()
            {
                AccountSummay = summary,
                AccountTransactions = transactions
            });
        }
    }
}
