const data = {
  request_1: {
    job_request: "Redesign marketing landing page",
    submitted_date: "2025-07-01",
    status: "In Progress",
    submitter: "Amit Sharma",
    url: "https://company.com/tasks/redesign-marketing",
    assigned: "Priya Verma",
    priority: "High",
    due_date: "2025-07-10",
    estimated_value: "₹2,80,000"
  },
  request_2: {
    job_request: "Migrate CRM data to cloud",
    submitted_date: "2025-06-28",
    status: "Pending",
    submitter: "Rajeev Kumar",
    url: "https://company.com/tasks/crm-migration",
    assigned: "Nisha Patel",
    priority: "Medium",
    due_date: "2025-07-15",
    estimated_value: "₹3,40,000"
  },
  request_3: {
    job_request: "Design new logo concepts",
    submitted_date: "2025-07-03",
    status: "Completed",
    submitter: "Sakshi Mehta",
    url: "https://company.com/tasks/logo-design",
    assigned: "Rahul Singh",
    priority: "Low",
    due_date: "2025-07-05",
    estimated_value: "₹1,00,400"
  },
  request_4: {
    job_request: "Develop performance report dashboard",
    submitted_date: "2025-07-02",
    status: "In Review",
    submitter: "Deepak Joshi",
    url: "https://company.com/tasks/performance-dashboard",
    assigned: "Kavita Bansal",
    priority: "High",
    due_date: "2025-07-12",
    estimated_value: "₹2,00,200"
  },
  request_5: {
    job_request: "Set up automated backups for HR system",
    submitted_date: "2025-06-30",
    status: "In Progress",
    submitter: "Meenakshi Rao",
    url: "https://company.com/tasks/hr-backups",
    assigned: "Ankit Desai",
    priority: "Medium",
    due_date: "2025-07-08",
    estimated_value: "₹4,90,000"
  }
};

export const setLocalStorage = () => {
  localStorage.setItem('data', JSON.stringify(data));
};

export const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  return data;
};