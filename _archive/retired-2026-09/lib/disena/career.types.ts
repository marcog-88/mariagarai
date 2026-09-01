import { z } from "zod";

export const intakeSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(200),
  linkedinOrTrajectory: z.string().trim().min(20).max(4000),
  avatarHint: z.string().trim().max(4000).optional().default(""),
  hiddenGifts: z.string().trim().max(2000).optional().default(""),
  notDoingAnymore: z.string().trim().max(2000).optional().default(""),
  firstThingToSell: z.string().trim().max(2000).optional().default(""),
});

export type CareerIntake = z.infer<typeof intakeSchema>;

export interface AvatarBlock {
  whoIs: string;
  pointA: string;
  pointB: string;
  transformation: string;
}

export interface NicheEvaluation {
  currentNicheLevel: string;
  recommendedNiche: string;
  why: string;
}

export type EcosystemOfferType =
  | "OFERTA INSIGNIA"
  | "OFERTA DE PROSPECCION"
  | "LEAD MAGNET"
  | "CONTINUIDAD";

export type EcosystemOffer =
  | {
      type: "OFERTA INSIGNIA";
      name: string;
      transformation: string;
      includes: string[];
      pricing: { validation: string; market: string; advanced: string };
      whenToLaunch: string;
    }
  | {
      type: "OFERTA DE PROSPECCION";
      name: string;
      solves: string;
      format: string;
      price: string;
      whenToLaunch: string;
    }
  | {
      type: "LEAD MAGNET";
      name: string;
      solves: string;
      whyValuable: string;
      format: string;
      price: "Gratis";
    }
  | {
      type: "CONTINUIDAD";
      name: string;
      includes: string[];
      forWhom: string;
      format: string;
      price: string;
      whenToLaunch: string;
    };

export interface CareerDesign {
  expertIdentity: string;
  nicheEvaluation: NicheEvaluation;
  avatar: AvatarBlock;
  ecosystem: EcosystemOffer[];
  vision1Year: string;
  vision5Years: string;
}
