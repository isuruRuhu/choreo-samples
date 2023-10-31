/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *   Do not change the name of the hook
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React, { useEffect } from "react";
import useQ5QrCodeResponsiveSize from "./useQ5QrCodeResponsiveSize";
import { useAuthContext } from "@asgardeo/auth-react";
import { useParams, useNavigate } from "react-router-dom";
import { CardDetails, Reward } from "src/api/types";
import { getQRCode, getCardDetails, getRewardDetails } from "src/api/api";

/* These are the possible values for the current variant. Use this to change the currentVariant dynamically.
Please don't modify */
const variantOptions = {
  ScreenDesktop: "ScreenDesktop",
  ScreenMobile: "ScreenMobile",
};

const useQ5QrCode = () => {
  const [currentVariant, setCurrentVariant] = React.useState<string>(
    variantOptions["ScreenDesktop"]
  );
  const navigate = useNavigate();
  const { rewardId } = useParams();
  const [qrCode, setQrCode] = React.useState<any>();
  const [isRewardLoading, setIsRewardLoading] = React.useState(false);
  const [isQRLoading, setIsQRLoading] = React.useState(true);
  const [reward, setReward] = React.useState<Reward | null>(null);
  const [, setCardDetails] = React.useState<CardDetails | null>(
    null
  );
  const { state } = useAuthContext();

  const getRewardImage = (rewardName: string) => {
    switch (rewardName) {
      case "Target":
        return "/images/target.png";
      case "Starbucks Coffee":
        return "/images/starbucks.png";
      case "Jumba Juice":
        return "/images/jamba.png";
      case "Grubhub":
        return "/images/grubhub.png";
      default:
        return "";
    }
  };

  async function getRewardInfo() {
    if (rewardId) {
      setIsRewardLoading(true);
      getRewardDetails(rewardId)
        .then((res) => {
          const logoUrl = getRewardImage(res.data.name);
          setReward({ ...res.data, logoUrl });
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsRewardLoading(false);
        });
    }
  }

  async function getGeneratedQRCode(
    userId: string,
    rewardId: string
  ) {
    setIsQRLoading(true);
    getQRCode(userId, rewardId)
      .then((res) => {
        const imageObjectURL = URL.createObjectURL(res.data);
        setQrCode(imageObjectURL);
        setIsQRLoading(false);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsRewardLoading(false);
      });
  }

  async function getCardInfo(userId) {
    getCardDetails(userId)
      .then((res) => {
        setCardDetails(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    if (state.isAuthenticated && state.sub) {
      getCardInfo(state.sub);
      getRewardInfo();
    }
  }, [state.isAuthenticated, state.sub]);

  useEffect(() => {
    if (state.sub && reward) {
      getGeneratedQRCode("U451298", reward.id);
    }
  }, [state.sub, reward]);

  const breakpointsVariant = useQ5QrCodeResponsiveSize();

  React.useEffect(() => {
    if (breakpointsVariant !== currentVariant) {
      setCurrentVariant(breakpointsVariant);
    }
  }, [breakpointsVariant]);

  const data: any = {
    currentVariant,
    reward,
    isRewardLoading,
    isQRLoading,
    qrCode,
  };
  const backToRewards = (): any => {
    navigate("/rewards");
  };

  const fns: any = { backToRewards, setCurrentVariant };

  return { data, fns };
};

export default useQ5QrCode;