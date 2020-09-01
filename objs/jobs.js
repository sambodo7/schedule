const jobTypes = ["print", "system", "code"];

class Job {
	constructor (id, name, tennent, user, cron, jobType, funct, cronJobFunction) {
		this.id = id;
		this.name = name;
		this.tennent = tennent;
		this.user = user;
		this.cron = cron;
		this.jobType = jobType;
		this.funct = funct;
		this.cronJobFunction = cronJobFunction;
	}

	isValidJobType(jobType) {
		return jobTypes.includes(jobType);
	}
}

module.exports = {Job};