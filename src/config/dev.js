"use strict";
module.exports = {
  HTTP_PORT: process.env.HTTP_PORT || 5000,
  P2P_PORT: process.env.P2P_PORT || 8080,
  DIFFICULTY: process.env.DIFFICULTY || 2,
  MINE_RATE: process.env.MINE_RATE || 3000, //msecs
  INITIAL_BALANCE: process.env.INITIAL_BALANCE || 500,
  MINING_REWARD: process.env.MINING_REWARD || 50
};
