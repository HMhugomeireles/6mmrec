import mongoose from "mongoose";
import { TeamSchema } from "./Teams";
import { GameGoalsSchema } from "./GameGoals";

export const TournamentSchema = new mongoose.Schema({
    date: Date,
    goals: [GameGoalsSchema],
    teams: [TeamSchema],
    status: { type: String, default: 'schedule' }, // playing, schedule, finish
    isActive: { type: Boolean, default: false },
    roundsTime: Number,
    rounds: [{ 
        team1: TeamSchema,
        team2: TeamSchema,
        team1Achievements: [GameGoalsSchema],
        team2Achievements: [GameGoalsSchema],
        isFinish: Boolean
    }],
    tableBoard: [{ teamName: String, points: Number }]
})
