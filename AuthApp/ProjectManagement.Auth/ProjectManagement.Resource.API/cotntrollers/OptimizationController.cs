using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectManagement.Resource.API.models;

namespace ProjectManagement.Resource.API.cotntrollers
{
    [Route("api/optimization")]
    [ApiController]
    public class OptimizationController : ControllerBase
    {
        private string userId => User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value;

        public OptimizationController() {
            
        }

        [Route("combinedfunction")]
        [Authorize]
        [HttpPost]
        public IActionResult GetAnswerCombinedObjectiveFunction(Matrix matrix)
        {
            if (ModelState.IsValid)
            {
                double[] max = new double[matrix.width];
                double[] min = new double[matrix.width];
                double sumWeight = 0;
                double[] answerArray = new double[matrix.height];
                double minAns;
                int answer = 0;
                for (int i = 0; i < matrix.height; i++)
                {
                    answerArray[i] = 0;
                }
                for (int i = 0; i < matrix.width; i++)
                {
                    sumWeight += matrix.Weight[i];
                }
                for (int i = 0; i < matrix.width; i++)
                {
                    matrix.Weight[i] = matrix.Weight[i]/ sumWeight;
                }
                for (int i = 0; i < matrix.width; i++)
                {
                    for (int j = 0; j < matrix.height; j ++)
                    {
                        if (j == 0)
                        {
                            max[i] = matrix.Data[j][i];
                            min[i] = matrix.Data[j][i];
                            continue;
                        }
                        if (matrix.Data[j][i] > max[i])
                        {
                            max[i] = matrix.Data[j][i];
                        }
                        if (matrix.Data[j][i] < min[i])
                        {
                            min[i] = matrix.Data[j][i];
                        }
                    }
                }
                for (int i = 0; i < matrix.width; i++)
                {
                    for (int j = 0; j < matrix.height; j++)
                    {
                        matrix.Data[j][i] = (matrix.Data[j][i] - min[i]) / (max[i]-min[i]);
                    }
                }
                for (int i = 0; i < matrix.height; i++)
                {
                    for (int j = 0; j < matrix.width; j++)
                    {
                        answerArray[i] += matrix.Data[i][j] * matrix.Direction[j] * matrix.Weight[j]; 
                    }
                }
                minAns = answerArray[0];
                answer = 0;
                for (int i = 1; i < matrix.height; i++)
                {
                    if (answerArray[i] < minAns)
                    {
                        minAns = answerArray[i];
                        answer = i;
                    }
                }
                return Ok(answerArray);
            }
            return BadRequest();
        }
    }


}
