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
                double maxAns;
                int answer = 0;

                //заполнение итогового массива нулями
                for (int i = 0; i < matrix.height; i++)
                {
                    answerArray[i] = 0;
                }

                //получение суммы весов
                for (int i = 0; i < matrix.width; i++)
                {
                    sumWeight += matrix.Weight[i];
                }

                //получение нормального веса
                for (int i = 0; i < matrix.width; i++)
                {
                    matrix.Weight[i] = matrix.Weight[i]/ sumWeight;
                }

                //получение массива максимальных и минимальных значений
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

                //нормализация значений
                for (int i = 0; i < matrix.width; i++)
                {
                    for (int j = 0; j < matrix.height; j++)
                    {   
                        if ((max[i] - min[i]) == 0)
                        {
                            return BadRequest("Invalid values");
                        }
                        matrix.Data[j][i] = (matrix.Data[j][i] - min[i]) / (max[i]-min[i]);
                    }
                }

                
                //подсчитываем количество направлений (max, min)
                int countNull = 0;
                int countOne = 0;
                int direction = 0;
                for (int i = 0; i < matrix.width; i++)
                {
                    if (matrix.Direction[i] == 0)
                    {
                        countNull++;
                    } else
                    {
                        countOne++;
                    }
                }

                //код преобразования направленний оптимизации
                if (countNull > countOne)
                {
                    direction = 0;
                    for (int i = 0; i < matrix.width; i++)
                    {
                        if (matrix.Direction[i] == 0)
                        {
                            matrix.Direction[i] = 1;
                        } else
                        {
                            matrix.Direction[i] = -1;
                        }
                    }
                }

                if (countNull < countOne)
                {
                    direction = 1;
                    for (int i = 0; i < matrix.width; i++)
                    {
                        if (matrix.Direction[i] == 1)
                        {
                            matrix.Direction[i] = 1;
                        }
                        else
                        {
                            matrix.Direction[i] = -1;
                        }
                    }
                }

                if (countNull == countOne)
                {
                    double maxPriority = 0;
                    int idx = 0;
                    for (int i = 0; i < matrix.width; i++)
                    {
                        if (maxPriority < matrix.Weight[i])
                        {
                            maxPriority = matrix.Weight[i];
                            idx = i;
                        }
                    }
                    if (matrix.Direction[idx] == 0)
                    {
                        direction = 0;
                        for (int i = 0; i < matrix.width; i++)
                        {
                            if (matrix.Direction[i] == 0)
                            {
                                matrix.Direction[i] = 1;
                            }
                            else
                            {
                                matrix.Direction[i] = -1;
                            }
                        }
                    }
                    if (matrix.Direction[idx] == 1)
                    {
                        direction = 1;
                        for (int i = 0; i < matrix.width; i++)
                        {
                            if (matrix.Direction[i] == 1)
                            {
                                matrix.Direction[i] = 1;
                            }
                            else
                            {
                                matrix.Direction[i] = -1;
                            }
                        }
                    }
                }

                //получение итогового массива
                for (int i = 0; i < matrix.height; i++)
                {
                    for (int j = 0; j < matrix.width; j++)
                    {
                        answerArray[i] += matrix.Data[i][j] * matrix.Direction[j] * matrix.Weight[j]; 
                    }
                }

                //поиск оптимального варианта из итогового массива
                if (direction == 0)
                {
                    minAns = answerArray[0];
                    for (int i = 1; i < matrix.height; i++)
                    {
                        if (answerArray[i] < minAns)
                        {
                            minAns = answerArray[i];
                            answer = i;
                        }
                    }
                }
                if (direction == 1)
                {
                    maxAns = answerArray[0];
                    for (int i = 1; i < matrix.height; i++)
                    {
                        if (answerArray[i] > maxAns)
                        {
                            maxAns = answerArray[i];
                            answer = i;
                        }
                    }
                }
                return Ok(answer);
            }
            return BadRequest();
        }
    }


}
