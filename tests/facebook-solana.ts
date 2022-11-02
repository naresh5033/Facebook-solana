import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { FacebookSolana } from "../target/types/facebook_solana";

describe("facebook-solana", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.FacebookSolana as Program<FacebookSolana>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
