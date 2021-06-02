import { Request, Response } from 'express';
import knex from '../db';

// GET
export const read = async (req: Request, res: Response) => {
  const result = await knex
    .select('*')
    .from('covid')
        
  res.json({
      data: result
  });
}

// POST
export const create = async (req: Request, res: Response) => {
  const json = {
    "data": [
      {"settlement_id": 2, "life_altered": "Sí, mucho", "employment_before_quarentine": "Empleado en blanco en una empresa", "employment_status": "Empleado", "employment_affected_by_quarentine": "Desempleado", "difficulties_daily_life": "Hacinamiento", "neighborhood_conditions": "Falta de servicios públicos", "neighborhood_daily_situations": "Cortes de agua", "home_situation": "Una pieza", "negatives_home_situations": "Hacinados con 5 hijos", "main_family_needs": "Dinero para comer", "government_measures": true, "promoted_measures_applied": "IFE y nada más", "are_benefits_received": true, "what_benefits": "IFE", "difficulties_accessing_benefits": false, "activities_developed_frequently": "Ninguna", "main_need_to_organize": "Para bajar los contagios", "neighborhood_strengths": "Solidaridad", "who_visited_neighborhood": "Intendente" },
      {"settlement_id": 3, "life_altered": "Sí, mucho", "employment_before_quarentine": "Empleado en blanco en una empresa", "employment_status": "Empleado", "employment_affected_by_quarentine": "Desempleado", "difficulties_daily_life": "Hacinamiento", "neighborhood_conditions": "Falta de servicios públicos", "neighborhood_daily_situations": "Cortes de agua", "home_situation": "Una pieza", "negatives_home_situations": "Hacinados con 5 hijos", "main_family_needs": "Dinero para comer", "government_measures": true, "promoted_measures_applied": "IFE y nada más", "are_benefits_received": true, "what_benefits": "IFE", "difficulties_accessing_benefits": false, "activities_developed_frequently": "Ninguna", "main_need_to_organize": "Para bajar los contagios", "neighborhood_strengths": "Solidaridad", "who_visited_neighborhood": "Intendente" }
    ]
  };

  if(json.data.length === 0) return res.status(500).json('No data received.')

  let data: Array<object> = [];

  for(let i = 0; i < json.data.length; i++) {
    data.push(json.data[i]) 
  }
  
  res.status(200).json("Data created successfully")

  return knex('covid').insert(data)
}