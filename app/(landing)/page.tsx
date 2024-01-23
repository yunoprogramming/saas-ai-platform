import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => { 
    return (
			<div>
				Landing page
				<div>
					<Link href='/signin'>
						<Button>Login</Button>
					</Link>
					<Link href='/signup'>
						<Button>Register</Button>
					</Link>
				</div>
			</div>
		);
}

export default LandingPage;